import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Army Builder Site
      </Link>
      <ul>
        <CustomLink to="/army-builder">Army Builder</CustomLink>
        <CustomLink to="/how-to">How To Use</CustomLink>
      </ul>
    </nav>
  );
}

// interface to avoid implicit any
interface customLinkProps {
  to: string;
  children: React.ReactNode;
}

// custom component to tidy up navbar code
function CustomLink({ to, children, ...props }: customLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
