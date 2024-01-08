import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";


const BreadCrumbs = ({mainTitle,mainUrl,catTitle,catUrl,subcatTitle,subcatUrl}) => {
    console.log("main",mainTitle);
    console.log("main",mainUrl);
    console.log("catTitle",catTitle);
    console.log("catUrl",catUrl);
    console.log("subcatTitle",subcatTitle);
    console.log("subcatUrl",subcatUrl);

  return (
    <Breadcrumb >
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/allcategory" }}>
        All Categories
      </Breadcrumb.Item>
      {mainTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${mainUrl}` }}>
        {mainTitle}
      </Breadcrumb.Item>}
      {catTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catUrl}` }} >
        {catTitle}
      </Breadcrumb.Item>}
      {subcatTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${subcatUrl}` }} >
        {subcatTitle}
      </Breadcrumb.Item>}
      {/* {breadcrumbsItem.map(
        (item, index) =>
          item && (
            <Breadcrumb.Item
              key={index}
              href="/beauty"
              linkAs={Link} linkProps={{ to: `/${item}` }}
              className="text-decoration-none"
            >
              {item}
            </Breadcrumb.Item>
          )
      )} */}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
