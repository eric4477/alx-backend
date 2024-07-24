#!/usr/bin/env python3
"""
BaseCaching module
"""

class BaseCaching:
    """BaseCaching defines a caching system"""

    MAX_ITEMS = 4

    def __init__(self):
        """Initialize the caching system"""
        self.cache_data = {}

    def put(self, key, item):
        """Add an item to the cache"""
        raise NotImplementedError("put() must be implemented in subclasses")

    def get(self, key):
        """Get an item from the cache"""
        raise NotImplementedError("get() must be implemented in subclasses")
