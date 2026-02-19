// leetcodeExtractor.js
import puppeteer from 'puppeteer';

const LEETCODE_URL = process.argv[2];
const AUTHOR = 'venkat';

if (!LEETCODE_URL) {
    console.error('Please provide a LeetCode problem URL as argument.');
    process.exit(1);
}

async function extractProblem(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
            '(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    );

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Grab all <script type="application/json"> contents
        const problemData = await page.evaluate(() => {
            const scripts = Array.from(
                document.querySelectorAll('script[type="application/json"]')
            );
            for (const script of scripts) {
                try {
                    const json = JSON.parse(script.textContent);
                    const question =
                        json?.props?.pageProps?.dehydratedState?.queries?.[0]
                            ?.state?.data?.question;
                    if (question) return question;
                } catch {}
            }
            return null;
        });

        if (!problemData) {
            console.error(
                'Could not find problem data. LeetCode page structure may have changed.'
            );
            await browser.close();
            return;
        }

        const title = problemData.title;
        const difficulty = problemData.difficulty;
        const problemNumber = problemData.questionId;
        const topicTags =
            problemData.topicTags.map((t) => t.name).join(', ') || '';
        const description = problemData.content
            .replace(/<pre>/g, '```js\n')
            .replace(/<\/pre>/g, '```')
            .replace(/<[^>]+>/g, '')
            .replace(/\n\s*\n/g, '\n')
            .trim();

        const markdown = `---
title: ${title}
description: Implementation of a solution for "${title}" by ${AUTHOR}.
date: ${new Date().toISOString().split('T')[0]}
topic: ${topicTags}
author: ${AUTHOR}
difficulty: ${difficulty}
problemNumber: ${problemNumber}
---

import { Playground } from "@/components/playground";
import { PrevNextNavigation } from "@/components/navigation/prev-next";

## Problem Statement

${description}

## Examples

${problemData.sampleTestCase || ''}

## Implementation

\`\`\`js
// write your solution here
\`\`\`

## Test Cases

\`\`\`js
// write test cases here
\`\`\`
`;

        console.log(markdown);
    } catch (err) {
        console.error('Error fetching problem:', err.message);
    } finally {
        await browser.close();
    }
}

extractProblem(LEETCODE_URL);
