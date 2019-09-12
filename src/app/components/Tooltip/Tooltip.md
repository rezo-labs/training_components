# Tooltip component
## 1. Trigger :
### 1.1 hover(default):  
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover'>
        <Badge variant='success' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 1.2 click:  
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='click'>
        <Badge variant='error' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 1.3 focus:  
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='focus'>
        <Badge variant='warning' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
## 2. maxWidth:
### 2.1 maxWidth without props truncate:  
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' maxWidth={100}>
        <Badge variant='info' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 2.2 maxWidth with props truncate:  
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' maxWidth={100} truncate>
        <Badge variant='secondary' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
## 3. onChange event handle:
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' onChange={(isVisible) => {console.log('isVisible value: ' + isVisible)}}>
        <Badge variant='success' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
## 4. Position:
### 4.1. Top(default):
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' position='top'>
        <Badge variant='default' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 4.2. Bottom:
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' position='bottom'>
        <Badge variant='info' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 4.3. Right:
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' position='right'>
        <Badge variant='primary' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
### 4.4. Left:
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' position='left'>
        <Badge variant='success' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```
## 5. delay(default: 300ms):
```jsx
import Badge from '../Badge/Badge';
    <Tooltip content='this is tooltips text!' offset={10} trigger='hover' position='left' delay={1000}>
        <Badge variant='error' isInverted clickable size='small'> Hi tooltips !</Badge>
    </Tooltip>
```