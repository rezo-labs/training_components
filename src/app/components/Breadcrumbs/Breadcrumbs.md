# Breadcrumb
## Purpose
A component to be used for navigation.



## Usage

#### Basic usage

```jsx
<Breadcrumbs
   
   
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

#### Custom separator
```jsx
<Breadcrumbs
isExpand
  separator='*'
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








