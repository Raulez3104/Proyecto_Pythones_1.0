import DashboardScreen from './components/Cliente';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <DashboardScreen />
      <StatusBar style="auto" />
    </>
  );
}
