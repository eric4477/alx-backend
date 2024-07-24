#!/usr/bin/env python3
"""
FIFOCache module
"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """FIFOCache implements a FIFO caching system"""

    def __init__(self):
        """Initialize the FIFO caching system"""
        super().__init__()
        self.keys_order = []

    def put(self, key, item):
        """Assign the item value for the key to self.cache_data"""
        if key is not None and item is not None:
            if key in self.cache_data:
                self.keys_order.remove(key)
            self.cache_data[key] = item
            self.keys_order.append(key)

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                first_key = self.keys_order.pop(0)
                del self.cache_data[first_key]
                print(f"DISCARD: {first_key}")

    def get(self, key):
        """Return the value in self.cache_data linked to key"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
