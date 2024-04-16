from setuptools import setup, find_packages

### solves an issue where modules from sibling packages were not being found
setup(name="backend", version=1.0, packages=find_packages())

### the terminal cmd is: (pip3 install -e .) the dot at the end scan the current directory so cd into the parent folder and relax