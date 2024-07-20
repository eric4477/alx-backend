#!/usr/bin/env python3
"""
This module provides a function named index_range that takes two integer
arguments, page and page_size, and returns a tuple of size two containing
a start index and an end index corresponding to the range of indexes to
return in a list for those particular pagination parameters.
"""


def index_range(page, page_size):
    """
    Calculate the start and end indexes for a given page and page size.
    """
    # Calculate the start index
    start_index = (page - 1) * page_size
    # Calculate the end index
    end_index = start_index + page_size
    # Return the tuple of start and end indexes
    return start_index, end_index
