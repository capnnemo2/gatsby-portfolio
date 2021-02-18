import React from "react";
import Layout from "../components/Layout";
import "./index.css";

// TODO fix grid layout

const Index = () => {
  return (
    <Layout>
      <div className="content">
        <p>
          Obviously this site is still in very early development so that Ben can
          learn Gatsby (and TypeScript!). That's right, even with all that his
          brain contains, there is room for more. Bring on the Gatsby (and TS)!
        </p>
        <p>
          He's amazing. Seriously, you won't believe how good this guy is. But
          we're going to tell you anyway.
        </p>
        <p>Now we're just adding extra text to see how grid treats this div.</p>
        <img src={`snow_face.jpeg`} alt="My face" width="400px" />
      </div>
    </Layout>
  );
};

export default Index;
