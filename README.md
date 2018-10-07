# react-outside-events

Handle events outside of element

### How to use:
```
import {OutsideEvents} from 'react-outside-events';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          Some page content else
        </p>
        
        <OutsideEvents on={{
            click: this.handleOutsideClick,
            touchstart: this.handleOutsideTouch,
            // or any other event
        }}>
          <p>
            Something
          </p>
        </OutsideEvents>
        
        <p>
          Some page content else
        </p>
      </div>
    );
  }

  handleOutsideClick = (ev) => {
    console.debug(ev);
  }
  
  handleOutsideTouch = (ev) => {
    console.debug(ev);
  }
```

Those event handlers will be triggered when you click|touch anywhere on the page but not on the `<p>Something</p>`.
