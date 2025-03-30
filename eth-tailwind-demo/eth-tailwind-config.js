/* ETH Zürich Design Tokens for Tailwind CSS */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary colors
        'eth-blue': '#0028A5',
        'eth-blue-80': '#3353B7',
        'eth-blue-60': '#6680CA',
        'eth-blue-40': '#99ADDC',
        'eth-blue-20': '#CCD6EE',
        
        // Secondary colors
        'eth-turquoise': '#00A6D6',
        'eth-petrol': '#006E85',
        'eth-bordeaux': '#AE0F0A',
        'eth-orange': '#F07E00',
        
        // Semantic colors
        'eth-success': '#00843D',
        'eth-warning': '#F7A600',
        'eth-error': '#E50046',
        'eth-info': '#0028A5',
        
        // Neutral colors
        'eth-black': '#000000',
        'eth-grey-90': '#1A1A1A',
        'eth-grey-80': '#333333',
        'eth-grey-70': '#4D4D4D',
        'eth-grey-60': '#666666',
        'eth-grey-50': '#808080',
        'eth-grey-40': '#999999',
        'eth-grey-30': '#B3B3B3',
        'eth-grey-20': '#CCCCCC',
        'eth-grey-10': '#E6E6E6',
        'eth-white': '#FFFFFF',
      },
      
      // Spacing values
      spacing: {
        '0': '0',
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
      },
      
      // Border radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',  // 2px
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem',  // 6px
        'lg': '0.5rem',    // 8px
        'xl': '0.75rem',   // 12px
        '2xl': '1rem',     // 16px
        'full': '9999px',
      },
      
      // Font families
      fontFamily: {
        'eth': ['ETH Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'eth-old': ['ETH Old', 'Georgia', 'Times', 'serif'],
      },
      
      // Font sizes
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
      
      // Box shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
    }
  }
}; 