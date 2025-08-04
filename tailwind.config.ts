
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '32px',
			screens: {
				'sm': '1440px',
				'md': '1440px',
				'lg': '1440px',
				'xl': '1440px',
				'2xl': '1440px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				border: 'hsl(226 232 240)',
				input: 'hsl(255 255 255)',
				ring: 'hsl(142 69% 58%)',
				background: 'hsl(255 255 255)',
				foreground: 'hsl(17 24 39)',
				primary: {
					DEFAULT: 'hsl(142 69% 58%)',
					foreground: 'hsl(255 255 255)'
				},
				success: {
					DEFAULT: 'hsl(142 69% 58%)',
					foreground: 'hsl(255 255 255)'
				},
				secondary: {
					DEFAULT: 'hsl(248 250 252)',
					foreground: 'hsl(51 65 85)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)',
					foreground: 'hsl(255 255 255)'
				},
				muted: {
					DEFAULT: 'hsl(248 250 252)',
					foreground: 'hsl(100 116 139)'
				},
				accent: {
					DEFAULT: 'hsl(59 130 246)',
					foreground: 'hsl(255 255 255)'
				},
				popover: {
					DEFAULT: 'hsl(255 255 255)',
					foreground: 'hsl(17 24 39)'
				},
				card: {
					DEFAULT: 'hsl(255 255 255)',
					foreground: 'hsl(17 24 39)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(142 69% 58%), hsl(142 76% 36%))',
				'gradient-hero': 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 70%, #f0fdf4 100%)',
				'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
			},
			boxShadow: {
				'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
				'hover': '0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 8px 10px -6px rgba(34, 197, 94, 0.1)',
				'glow': '0 0 30px rgba(34, 197, 94, 0.3)',
				'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(-2px)' },
					'50%': { transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
