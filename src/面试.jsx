import { useState, useMemo, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { FixedSizeList} from 'react-window';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // useMemo缓存计算结果
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // 使用useCallback包裹handleSearch函数
  const handleSearch = useCallback(
    debounce((e) => {
      setSearchTerm(e.target.value);
    }, 300), 
    []
  );
    
  const Row = ({ index, style }) => (
    <div style={style} key={filteredProducts[index].id}>
      <ProductItem product={filteredProducts[index]} />
    </div>
  );

  return (
    <div>
      <input 
        type="text" 
        onChange={handleSearch} 
        placeholder="搜索产品" 
      />
      <FixedSizeList
        height={400}
        itemCount={filteredProducts.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default ProductList;
