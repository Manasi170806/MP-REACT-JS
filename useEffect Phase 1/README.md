# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# Phase 1

1. Build an application that'll fetch the posts data from [json placeholder api](https://jsonplaceholder.typicode.com/posts)  on mount (first time ui loaded on browser) and displays the same onto UI
2. Maintain loading and error state as well in addition to maintaining data state
3. Showcase loading indicator when API request is still pending
4. Showcase error message if API request fails
5. Showcase the list of posts if the API request is successful

# Phase 2

1. Add pagination to the above built application; so basically you also maintain `page` state.
2. There will be a previous button and next button clicking on which will change page state to `page-1`  and `page+1` accordingly. The current page number should be displayed in between
	1. **Previous** button should be disabled if we are in page 1.
	2. **Next** button should be disabled if we are in last page. 
3. Every time user clicks on different page; you should get and display data related to that page only. Data related to a particular page, one can get by using `_page` param

# Phase 3

Add another count state and counter component and show that API call is not made even when the counter changes as an example as your useEffect has only one dependency `page`

So basically `useEffect` callback gets called only 

1. during mount phase
2. whenever the value `page` updates
