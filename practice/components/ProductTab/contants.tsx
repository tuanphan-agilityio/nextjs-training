const TAB_ITEMS = [
  {
    id: '1',
    label: 'Description',
    content: (
      <div className='text-md sm:text-sm'>
        <p className='text-secondary font-primary-bold'>Detail Product</p>
        <ul className='mt-5 ml-6 list-disc'>
          {Array(3)
            .fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
            .map((item, index) => (
              <li key={index} className='text-secondary'>
                {item}
              </li>
            ))}
        </ul>
      </div>
    ),
  },
  {
    id: '2',
    label: 'Review (5)',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>,
  },
];

export { TAB_ITEMS };
