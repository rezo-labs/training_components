# My Pagination
## 1. Basic pagination:
```jsx
<Pagination total={60} />
```
## 2. Custom pagination:
```jsx
<Pagination 
    total = {40}
    component = {page => (<span>{`page ${page}`}</span>)}
	max = {7} 
/>
```
## 3. Maximum items:
```jsx
<Pagination
    total = {90}
	max = {7} 
    current = {9}
/>
```
## 4. Truncate
### 4.1. Truncate 1:
```jsx
<Pagination
  total = {200}
	max = {12} 
  current = {1}
/>
```
### 4.2 Truncate 2:
```jsx
<Pagination
  total = {200}
	max = {12} 
  current = {13}
/>
```
### 4.3 Truncate 3:
```jsx
<Pagination
    total = {200}
	max = {12} 
    current = {20}
/>
```
## 5. Handle error event
### 5.1 When current < 1:
```jsx
<Pagination
    total = {60}
    current = {0}
/>
```
### 5.2 When current > total:
```jsx
<Pagination
    total = {60}
    current = {61}
/>
```
## 6. handle onChange event ( from user ):
```jsx
<Pagination total={60} onChange={(page)=> {console.log(page)}}/>
```