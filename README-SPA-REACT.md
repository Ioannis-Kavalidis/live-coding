# Live-coding

## SPA - REACT 

[09/06/2020](jun/09-06/first-app)

- What is a Single Page Application? Why do we need it?
- MVC Concepts
- React intro: Why react? React vs. Web Component Standard"
- Rendering: `ReactDOM.render(<html>, <DOMElement>)`
- First component definition: ""A functional component returns HTML to render""
- Render your first component: `const Hello = () => <h1>Hello React</h1>`"
- Starting a react project: `npx create-react-app <app name>`
- Reviewing `react-scripts` in package.json
- Project organization I: `src` vs. `public` folders, the `build` folder
- Bootstrapping react: `index.js`
- Including styles: `import <path to css>`
- `App.js`, the boilerplate `App` component
- `import <image name> from <path to image>`
- `<img src={imageName} alt=""..."" />`



[10/06/2020](jun/10-06)

- Build your own React App without create-react-app [click here to find the steps](https://github.com/FBw-26/lessons/blob/master/SPA-REACT-README.md)



[11/06/2020](jun/11-06)

- `class SomeComponent extends React.Component`
- JSX 
- the `render(){ ... }` method
- Props in classes: `this.props` vs. `props` as parameter
- When to use: Class components vs. functional components
- Conditional rendering: `{ <boolean variable> ? <JSX 1> : <JSX 2> }`
`{ <array variable>.map(item => (<JSX>)) }`, the `key` property

Project: To Do List with REACT

[15/06/2020](jun/15-06)

- Multi-line templates: `const <component name> = () => (<JSX>)`
- One element per component: `React.Fragment` for multiple html tags
- Put the JS in JSX: Using `{}` for JS expression interpolation
- Project organization II: The `components` folder
- Exporting and Importing components
- Using Components in JSX: `<ComponentName />`
- `const <component name> = (props) => (<p>{props.propName)</p>)`
- `<SomeComponent propName={data} />`"""

- The ToDo list from last week.

- Project: Add new features to the ToDo List

