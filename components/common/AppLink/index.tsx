import { ReactNode, MouseEventHandler } from 'react';
import { Link } from '@/i18n/navigation';

type AppLinkProps = {
  children: ReactNode;
  href?: string;
  title?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: '_blank' | '_self' | '_parent' | '_top';
  prefetch?: boolean;
};

const AppLink: React.FC<AppLinkProps> = ({
  children,
  href = '',
  title,
  className = '',
  onClick,
  target = '_parent',
  prefetch = false,
}) => {
  return (
    <Link
      prefetch={prefetch}
      href={href}
      className={className}
      target={target}
      title={title}
      onClick={onClick}
      aria-label={title}
    >
      {children}
    </Link>
  );
};

export default AppLink;
