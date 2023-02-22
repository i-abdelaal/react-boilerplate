import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <button className="btn btn-primary">Primary button</button>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
