import React from 'react';
import { Header, LineChart } from '../../components/components_index';

function Line() {
  return (
    <div className='m-4 md:m-10 p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg dark:text-gray-200'>
      <Header category={'Chart'} title={'Inflation Rate'}/>
      <LineChart/>
    </div>
  )
}

export default Line