#!/usr/bin/env python3
"""
BasicCache module
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """BasicCache implements a simple caching system without limit"""

    def put(self, key, item):
        """Assign the item value for the key to self.cache_data"""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Return the value in self.cache_data linked to key"""
        if key is None or key not in self.cache_data:
            return None
        return self.cache_data[key]
   