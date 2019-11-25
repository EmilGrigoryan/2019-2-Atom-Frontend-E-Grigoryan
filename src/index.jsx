import React from 'react'
import { render } from 'react-dom'
import './components/Initialization'
import './styles/globalStyles.css'
import * as serviceWorker from './utils/serviceWorker'
import { ChatForm } from './components/Chat'
render(<ChatForm />, document.getElementById('root'))
serviceWorker.unregister()
