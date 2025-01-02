import { createRoot } from 'react-dom/client'
import './index.css'
import Test from "./store/test"
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
    <Test />
    </RecoilRoot>
)
