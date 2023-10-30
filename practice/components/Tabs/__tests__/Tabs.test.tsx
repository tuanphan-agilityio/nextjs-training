import { render, screen, fireEvent } from '@testing-library/react';

import Tabs, { TabsProps, Tab } from '..';

describe('Tabs Component', () => {
  const mockTabs: Tab[] = [
    { id: 'tab1', label: 'Tab 1', content: 'Tab 1 Content' },
    { id: 'tab2', label: 'Tab 2', content: 'Tab 2 Content' },
    { id: 'tab3', label: 'Tab 3', content: 'Tab 3 Content' },
  ];

  const mockProps: TabsProps = {
    items: mockTabs,
  };

  it('renders the first tab as the initial active tab', () => {
    render(<Tabs {...mockProps} />);
    const activeTab = screen.getByText('Tab 1');

    expect(activeTab).toHaveClass('text-quaternary');
    expect(activeTab).toHaveClass('border-quaternary');
  });

  it('changes the active tab when clicking on a tab', () => {
    render(<Tabs {...mockProps} />);
    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);

    expect(tab2).toHaveClass('text-quaternary');
    expect(tab2).toHaveClass('border-quaternary');
  });

  it('renders the content of the active tab', () => {
    render(<Tabs {...mockProps} />);
    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);
    const tab2Content = screen.getByText('Tab 2 Content');

    expect(tab2Content).toBeInTheDocument();
  });
});
