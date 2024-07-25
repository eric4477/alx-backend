#!/usr/bin/env python3
"""Task 3: LRU Caching.
"""
from collections import OrderedDict

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """Represents an object that allows storing and
    retrieving items from a dictionary with an LRU
    removal mechanism when the limit is reached.
    """
    def __init__(self):
        """Initializes the cache.
        """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """Adds an item in the cache.
        """
        if key is None or item is None:
            return
        
        if key in self.cache_data:
            # Move the key to the end to mark it as recently used
            self.cache_data.move_to_end(key)
        else:
            if len(self.cache_data) + 1 > BaseCaching.MAX_ITEMS:
                # Remove the first (least recently used) item
                lru_key, _ = self.cache_data.popitem(last=False)
                print("DISCARD:", lru_key)
        
        self.cache_data[key] = item

    def get(self, key):
        """Retrieves an item by key.
        """
        if key is None or key not in self.cache_data:
            return None
        
        # Move the key to the end to mark it as recently used
        self.cache_data.move_to_end(key)
        return self.cache_data[key]
