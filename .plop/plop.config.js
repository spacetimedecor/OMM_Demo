const componentGenerator = {
  description: 'Create a new component/page',
  prompts: [
    {
      type: 'input',
      name: '_type',
      message: 'Which type? (component/page)',
      default: 'component',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Component/Page name?',
      default: 'Button',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'Storybook folder?',
      default: 'Example',
    },
    {
      type: 'confirm',
      name: 'stateless',
      message: 'Is it Stateless?',
      default: 'y',
    }
  ],
  actions: ({ stateless, _type }) => {
    const whichFolder = _type === 'component' ? 'components' : 'pages';

    const actions = [
      {
        type: 'add',
        path: `../src/${whichFolder}/{{properCase name}}/index.jsx`,
        templateFile: './index.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/${whichFolder}/{{properCase name}}/{{properCase name}}.component.jsx`,
        templateFile: stateless ? './componentName.sfc.jsx.hbs' : './componentName.class.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/${whichFolder}/{{properCase name}}/{{properCase name}}.styled.jsx`,
        templateFile: './componentName.styled.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/${whichFolder}/{{properCase name}}/{{properCase name}}.test.jsx`,
        templateFile: './componentName.test.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/${whichFolder}/{{properCase name}}/{{properCase name}}.stories.jsx`,
        templateFile: './componentName.story.jsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
};
