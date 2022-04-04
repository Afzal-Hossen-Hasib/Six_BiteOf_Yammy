import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>QnA Section</h1>
            <div>
                <h1>What Is The Purpose Of Context API?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context Api is the alternative to "prop drilling" or moving props from grandparent to child to parent. Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. React's Context API can be used to provide state across all, or part, of a React application. As this guide will show, this is done using the createContext function to define the context, a Provider component in which to wrap the component tree that requires access to the context. Then, either a Consumer component, a context class member, or the useContext hook can be used within a component to access the state.</p>
            </div>

            <div>
                <h1>What Is Semantic Tag?</h1>
                <p>One of the most important features of HTML is its semantics. Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content. The benefit of writing HTML semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster. The element defines a footer for a document or section. A element typically contains: authorship information. copyright information. HTML5 provides new semantic elements that allow authors to specifically define aspects of web documents. Another important note is that semantic HTML can potentially future-proof website. With the growing popularity of semantic HTML, more and more web services and search engines will likely leverage its benefits.</p>
            </div>

            <div>
                <h1>What Are Inline, Block And Inline-Block Elements?</h1>
                <p>Inline Elements Do not create a new line. Example Are: a, button, span, tags etc. Block Element Take Their Space when made. Example Are: div, p, header tags etc. But Inline-block elements are those which remain inline with the texts around it but appears as inline element. Example Can Be: abbr, button tags etc. </p>
            </div>
        </div>
    );
};

export default Blogs;