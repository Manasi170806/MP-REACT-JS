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



**📝 React API Fetching Demo with Pagination & useEffect ⚛️🔗**

🚀 A comprehensive React.js demo showcasing API data fetching, pagination, loading/error states, and useEffect dependency behavior! Perfect for learning modern React patterns.

**✨ Key Features**

🌐 Phase 1: Core API Fetching

✅ Fetches posts from JSONPlaceholder API

✅ Manages loading, error, and data states

⏳ Shows loading spinner during API requests

❗ Displays error messages if fetch fails

📜 Lists posts beautifully when successful


**🔢 Phase 2: Smart Pagination**

◀️ Previous button (disabled on page 1)

▶️ Next button (disabled on last page)

🔢 Current page number display

📊 Fetches only relevant page data using _page param


**⚛️ Phase 3: useEffect Demonstration**

➕➖ Separate counter component


**🛠 Tech Stack**

⚛️ React.js (Functional Components)

🎨 CSS Modules for styling

🔄 useState + useEffect hooks

📡 Fetch API for data retrieval

🚀 Vite for blazing fast development


**📌 Learning Outcomes**

✔ Modern React data fetching patterns

✔ Proper state management (loading/error/data)

✔ Pagination implementation

✔ useEffect dependency array deep understanding

✔ Clean component architecture


**🚀 Getting Started**

npm install

npm run dev


**🖼 UI Components**

PostsList 📜 - Displays fetched posts

Pagination 🔢 - Handles page navigation

Counter 🔄 - Demonstrates useEffect

LoadingSpinner ⏳ - Visual loading indicator

ErrorMessage ❗ - Shows fetch errors

**📸 Posts Output**

<img width="1897" height="901" alt="Screenshot (55)" src="https://github.com/user-attachments/assets/e3b558c5-27ea-42ce-967e-fd084d3b36d4" />

<img width="1891" height="894" alt="Screenshot (56)" src="https://github.com/user-attachments/assets/56a15102-eac6-444f-bbc8-ca4abbbaf75d" />


#ReactJS #FrontendDevelopment #APIFetching #Pagination #useEffect #Hooks #JavaScript #WebDevelopment #Coding #LearnToCode #OpenSource #ReactProjects #BeginnersGuide #StateManagement


**PROJECT EXPLAIN VIDEO :** https://drive.google.com/file/d/1h8glm3kDOwMIfrXK-JuRKE3Y8A58pmCr/view?usp=sharing
