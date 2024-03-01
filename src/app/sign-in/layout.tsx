// app/layout.tsx
import { ReactNode } from 'react';

type Props = {
children: ReactNode;
};

const MinimalistLayout = ({ children }: Props) => {
return <>{children}</>;
};

export default MinimalistLayout;