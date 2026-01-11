# Data Structures and Algorithms - Python

A comprehensive collection of data structures and algorithms implementations in Python for learning and practice.

## Project Structure

```
.
├── src/
│   └── dsa/                 # Main package
│       ├── __init__.py
│       ├── arrays/          # Array implementations
│       ├── linked_lists/    # Linked list implementations
│       ├── stacks/          # Stack implementations
│       ├── queues/          # Queue implementations
│       ├── trees/           # Tree implementations
│       ├── graphs/          # Graph implementations
│       ├── sorting/         # Sorting algorithms
│       ├── searching/       # Searching algorithms
│       └── algorithms/      # Other algorithms
├── tests/                   # Test files
├── examples/                # Usage examples
├── docs/                    # Documentation
├── pyproject.toml          # Project configuration
├── requirements.txt        # Production dependencies
├── requirements-dev.txt    # Development dependencies
└── .gitignore              # Git ignore file
```

## Setup

1. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   pip install -r requirements-dev.txt
   ```

3. **Install in development mode:**
   ```bash
   pip install -e .
   ```

## Development Tools

This project uses the following development tools:

- **Formatting:** `black` and `isort`
- **Linting:** `ruff`
- **Type checking:** `mypy`
- **Testing:** `pytest`

### Running Tools

```bash
# Format code
black src/ tests/ examples/
isort src/ tests/ examples/

# Lint code
ruff check src/ tests/ examples/

# Type check
mypy src/

# Run tests
pytest

# Run tests with coverage
pytest --cov=src/dsa
```

## Usage

Import and use the implementations:

```python
from dsa.arrays import DynamicArray
from dsa.stacks import Stack
from dsa.queues import Queue

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # Output: 2
```

## Contributing

1. Follow the existing code style
2. Add tests for new implementations
3. Update documentation
4. Run all tools before submitting

## License

This project is licensed under the MIT License.