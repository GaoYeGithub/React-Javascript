import React from 'react';
import { Box, Flex, Link, Button } from 'theme-ui';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="nav" sx={{ bg: 'primary', color: 'white', p: 3 }}>
      <Flex as="ul" sx={{ listStyle: 'none', m: 0, p: 0, flexDirection: ['column', 'row'], alignItems: 'center', justifyContent: 'space-between' }}>
        <Box as="li" sx={{ display: ['block', 'none'], mb: [2, 0] }}>
          <Button onClick={toggleMenu} sx={{ bg: 'transparent', color: 'white', fontSize: 4 }}>
            <FaBars />
          </Button>
        </Box>
        <Box as="li" sx={{ display: [isOpen ? 'block' : 'none', 'block'], mb: [2, 0], px: 3 }}>
          <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: 3 }}>Home</Link>
        </Box>
        <Box as="li" sx={{ display: [isOpen ? 'block' : 'none', 'block'], mb: [2, 0], px: 3 }}>
          <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: 3 }}>About</Link>
        </Box>
        <Box as="li" sx={{ display: [isOpen ? 'block' : 'none', 'block'], mb: [2, 0], px: 3 }}>
          <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: 3 }}>Projects</Link>
        </Box>
        <Box as="li" sx={{ display: [isOpen ? 'block' : 'none', 'block'], mb: [2, 0], px: 3 }}>
          <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: 3 }}>Contact</Link>
        </Box>
        <Box as="li" sx={{ display: [isOpen ? 'block' : 'none', 'block'], px: 3 }}>
          <Button sx={{ bg: 'secondary', color: 'white' }}>Sign Up</Button>
        </Box>
        <Box as="li" sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
          <Button onClick={toggleTheme} sx={{ bg: 'transparent', color: 'white', fontSize: 4 }}>
            {isDark ? <FaSun /> : <FaMoon />}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
