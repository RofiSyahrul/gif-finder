import clsx from 'clsx';

import styles from './styles.module.css';

interface LabelProps {
  isCentered?: boolean;
  children: string;
}

export default function Label({ isCentered, children }: LabelProps) {
  return (
    <div className={clsx(styles.label, { [styles.centered]: isCentered })}>
      {children}
    </div>
  );
}
