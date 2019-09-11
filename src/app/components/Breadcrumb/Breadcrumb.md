# Breadcrumb
## 1. Basic use:
```jsx
    <Breadcrumb
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
    ]}
    />
```
##  2. Props isExpand:
```jsx
    <Breadcrumb
    isExpand
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
    ]}
    />
```
## 3. Custom Separator:
```jsx
    <Breadcrumb
	separator = '>'
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
    ]}
    />
```
## 4. Component:
```jsx
<Breadcrumb
	component = {(route) => (<span>{`${route.name}`} /</span>)}
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
## 5. Event onClick Ellipsis:
```jsx
	<Breadcrumb
	onExpand={() => {alert("you clicked ellipsis !");}}
    isExpand
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
    ]}
    />
```