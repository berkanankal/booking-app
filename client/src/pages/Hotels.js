import SearchFilter from '../components/SearchFilter';
import SearchResult from '../components/SearchResult';

function Hotels() {
  return (
    <div className='container mx-auto flex pt-5 pb-5'>
      <div className='w-1/4'>
        <SearchFilter />
      </div>
      <div className='w-3/4'>
        <SearchResult />
      </div>
    </div>
  )
}

export default Hotels