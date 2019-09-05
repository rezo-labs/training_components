# ---My Input
## 1. Input status:
```jsx
<Input status='warning' label = 'This is label' helpText='Help text here!' type = 'text'/>
<Input status='success' label = 'This is label' helpText='Help text here!' type = 'text'/>
<Input status='error' label = 'This is label' helpText='Help text here!' type = 'text'/>
```
## 2. variant:
```jsx
<Input variant ='default' label = 'default:' type = 'text'/>
<Input variant='autofill' label = 'autofill:' type = 'text'/>
<Input variant='minimal' label = 'minimal:' type = 'text'/>
<Input variant='focus' label = 'focus:' type = 'text'/>
```
## 3. isDisable:
```jsx
<Input isDisable label = 'This is label' helpText='help text here!' value='This is isDisable' type = 'text'/>
```
## 4. type:
```jsx
<Input label = 'Type password' helpText='help text here!' defaultValue='helloguys' type = 'password'/>
<Input label = 'Type number' helpText='help text here!' defaultValue='123321' type = 'number'/>
<Input label = 'Type text' helpText='help text here!' defaultValue='This is text type' type = 'text'/>
```
## 5. place holder:
```jsx
<Input variant ='focus' label = 'Type text' helpText='help text here!' placeholder='this is place holder' type = 'text'/>
```
## 6. check onBlur event:
```jsx
<Input status='warning' label = 'Type text' helpText='Help text here!' placeholder='this is place holder' type = 'text' onBlur={event => alert('you have left the input ...')}/>
```
## 7. check onChange event:
```jsx
<Input status='success' label = 'Type text' helpText='Help text here!' placeholder='this is place holder' type = 'text' onChange={ event => alert('you have Changed the input ...')  }/>
```
## 8. check onMouseDown event:
```jsx
<Input status='error' label = 'Type text' helpText='Help text here!' placeholder='this is place holder' type = 'text' onMouseDown={ event => alert('MouseDown event is started ')  }/>
```
## 9. check onFocus event:
```jsx
<Input status='warning' label = 'Type text' helpText='Help text here!' placeholder='this is place holder' type = 'text' onFocus={ event => alert('you have focused the input ...')  }/>
```


