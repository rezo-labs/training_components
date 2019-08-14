# my Pagination
## Basic pagination:
```jsx
<Pagination total={60}/>
```
## Custom pagination:
```jsx
<Pagination 
    total = {40}
    component = {page => (<span>{`page ${page}`}</span>)}
	max = {7} 
/>
```
## Maximum items:
```jsx
<Pagination
    total = {90}
	max = {7} 
    current = {9}
/>
```
## Truncate
### Truncate 1:
```jsx
<Pagination
  total = {200}
	max = {12} 
  current = {1}
/>
```
### Truncate 2:
```jsx
<Pagination
  total = {200}
	max = {12} 
  current = {13}
/>
```
### Truncate 3:
```jsx
<Pagination
    total = {200}
	max = {12} 
    current = {20}
/>
```