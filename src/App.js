import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HudPage } from './pages/Page_hud';
import { TabPage } from './pages/Page_tab';
import { AdminPage } from './pages/Page_admin';

export function getUniqueNum() {
	return new Date().getTime();
}

function App() {
	return (
    	<Routes>
			<Route path='/' element={<HudPage/>}/>
			<Route path='/tab' element={<TabPage/>}/>
			<Route path='/admin' element={<AdminPage/>}/>
    	</Routes>
	);
}

export default App;


//get_blobal_update - get full update from server
