# Breadcrumb
## Purpose
A component to be used for navigation.



## Usage

#### Basic usage

```jsx
<Breadcrumbs
   
   activeItem={2}
    routes = {[
  	{
    	href: "/introduction",
      name: "introduction"
  	},
  	{
    	href: "/introduction/pricing",
      name: "pricing"
  	},
  	{
    	href: "/introduction/pricing/general",
      name: "general"
  	}
  ] }
  
/>
```
#### Override collapsing state
```jsx
<Breadcrumbs
isExpand
  activeItem={4}
  routes = {[
  	{
    	href: "/home",
      name: "EPL"
  	},
  	{
    	href: "/home/introduction",
      name: "2019-2020"
  	},
  	{
    	href: "/home/introduction/member",
      name: "Manchester United"
  	},
    {
        href: "/home/introduction/member/duy",
        name: "Pogba"
  	},
  	{
    		href: "/home/introduction/member/duy",
        name: "Stats"
  	}
  ]}
/>
```








