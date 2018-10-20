# react-outside-events

Handle events outside of element

### Install:
```
npm install --save react-outside-events
```

### How to use:
```
import {OutsideEvents} from 'react-outside-events';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          Some page content
        </p>

        <OutsideEvents on={{
            click: (event) => {
              console.debug('handle click');
            },
            touchstart: (event) => {
              console.debug('handle touch');
            },
            {/* or any other event */}
            {/*
              These event handlers will be triggered
              when you click|touch anywhere on the page
              but not on the `<p>Something</p>`
            */}
        }}>
          <p>
            Something
          </p>
        </OutsideEvents>

        <p>
          Some page content
        </p>
      </div>
    );
  }
```
