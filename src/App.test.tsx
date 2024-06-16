import {act, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

describe('App', () => {
    it('should render components without crashing', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        });

        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
        expect(screen.getByText('Movies')).toBeInTheDocument();
    });
});
