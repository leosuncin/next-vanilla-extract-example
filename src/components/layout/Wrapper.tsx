import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

import * as styles from '@/components/layout/Wrapper.css';

function Wrapper({
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>) {
  return (
    <div {...props} className={styles.wrapper}>
      {children}
    </div>
  );
}

export default Wrapper;
