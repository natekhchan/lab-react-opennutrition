// src/components/Search.js

import React from 'react';
import { Input } from 'antd';

function Search({ searchTerm, onSearch }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Input
        placeholder="Enter search query"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: '98%', margin: '0 auto', display: 'block' }}
      />
    </div>
  );
}

export default Search;