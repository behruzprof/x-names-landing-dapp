// mui icons
import BictoryIcon from './icons/resource-icon-1.svg'
import DocsIcon from './icons/resource-icon-2.svg'
import LinktreeIcon from './icons/resource-icon-3.svg'
import SupportIcon from './icons/resource-icon-4.svg'
import BuyIcon from './icons/resource-icon-5.svg'
import TelegramIcon from './icons/resource-icon-6.svg'
import TwitterIcon from './icons/resource-icon-7.svg'
import DiscordIcon from './icons/resource-icon-8.svg'
import MediumIcon from './icons/resource-icon-9.svg'
import ContactUsIcon from './icons/resource-icon-10.svg'

// shared assets
import { LogoBictory } from '@/shared/assets'

export const DomainLinks = [
  { text: 'xNames', isLive: true },
  { text: 'CNS', isLive: true },
  { text: 'SolNames', isLive: false },
  { text: 'FtmNames', isLive: false },
  { text: 'AvaxNames', isLive: false }
]

export const ResourceLink = [
  [
    {
      text: 'Bictory',
      Icon: BictoryIcon,
      link: 'https://bictory.io/'
    },
    {
      text: 'Docs',
      Icon: DocsIcon,
      link: 'https://bictory.io/docs/b_litepaper.pdf'
    },
    {
      text: 'Linktree',
      Icon: LinktreeIcon,
      link: 'https://linktr.ee/BictoryFinance'
    },
    {
      text: 'Support/FAQ',
      Icon: SupportIcon,
      link: 'mailto:support@concordium.com'
    },
    {
      text: 'Buy  $BT',
      Icon: BuyIcon,
      link: 'https://bictory.io/bt-token'
    }
  ],
  [
    {
      text: 'Telegram',
      Icon: TelegramIcon,
      link: 'https://t.me/BictoryFinance'
    },
    {
      text: 'Twitter',
      Icon: TwitterIcon,
      link: 'https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ebictory_finance&region=follow_link&screen_name=bictory_finance'
    },
    {
      text: 'Discord',
      Icon: DiscordIcon,
      link: 'https://discord.com/invite/bictoryfinance'
    },
    {
      text: 'Medium',
      Icon: MediumIcon,
      link: 'https://bictory-finance.medium.com/'
    },
    {
      text: 'Contact Us',
      Icon: ContactUsIcon,
      link: 'mailto:Business@bictory.io'
    }
  ]
]
