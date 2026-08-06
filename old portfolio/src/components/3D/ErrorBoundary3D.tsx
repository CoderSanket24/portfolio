import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary3D extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('3D Scene Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-800/50 rounded-xl">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                3D Visualization Unavailable
              </h3>
              <p className="text-gray-400 text-sm">
                Your browser may not support WebGL or 3D graphics.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Try updating your browser or enabling hardware acceleration.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
