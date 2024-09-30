export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "/",
    },
    {
      id: "1",
      title: "Services",
      isDropdown: true, children: [
        { title: 'Income Tax', url: '/services/0' },
        { title: 'Goods & Service Tax(GST)', url: '/services/1' },
        { title: 'Audit', url: '/services/2' },
        { title: 'Corporate Services', url: '/services/3' },
        { title: 'Value Added Tax', url: '/services/4' },
        { title: 'Service Tax', url: '/services/5' },
        { title: 'Corporate Finance', url: '/services/6' },
        { title: 'Accounting Services', url: '/services/7' },
        { title: 'Benefits of Outsourcing', url: '/services/8' },
        { title: 'Corporate Governance', url: '/services/9' },
    ]},
    {
      id: "2",
      title: "Blogs",
      url: "#blogs",
    },
    {
      id: "3",
      title: "Knowledge Hub",
      url: "#knowledge",
    },
    {
        id: "4",
        title: "Our Clients",
        url: "#clients",
      },
      {
        id: "5",
        title: "Contact Us",
        url: "#contact",
      },
  ];