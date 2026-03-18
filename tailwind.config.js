/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			sage: {
  				'50': '#F6F7F4',
  				'100': '#E8EBE4',
  				'200': '#C8D1C0',
  				'300': '#9CAA8E',
  				'400': '#7B8E6B',
  				'500': '#5A6E4B',
  				'600': '#455638'
  			},
  			warm: {
  				'50': '#FFFDF9',
  				'100': '#FBF7F0',
  				'200': '#F0E8DA'
  			},
  			rose: {
  				'100': '#F9E8E8',
  				'200': '#EECFCF',
  				'400': '#C98B8B'
  			},
  			charcoal: {
  				'700': '#3A3A3A',
  				'800': '#2A2A2A',
  				'900': '#1A1A1A'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'Georgia',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'float-1': 'float1 25s ease-in-out infinite',
  			'float-2': 'float2 30s ease-in-out infinite',
  			'fade-in': 'fadeIn 0.6s ease forwards',
  			'slide-up': 'slideUp 0.8s ease-out forwards'
  		},
  		keyframes: {
  			float1: {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-20px, 30px) scale(1.03)'
  				}
  			},
  			float2: {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(25px, -25px) scale(1.05)'
  				}
  			},
  			fadeIn: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		boxShadow: {
  			soft: '0 4px 20px rgba(0, 0, 0, 0.06)',
  			card: '0 2px 12px rgba(0, 0, 0, 0.04)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
