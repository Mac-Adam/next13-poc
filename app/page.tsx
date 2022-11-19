'use client';

import { DropdownMenu, Modal, Popover, Select, Switch } from 'src/ui-base';

export default function HomePage() {
  return (
    <div>
      <h1>Next13 - prove of concept</h1>
      <p>tech stack:</p>
      <ul>
        <li>next.js</li>
        <li>react</li>
        <li>typescript</li>
        <li>tailwindcss</li>
        <li>headles ui</li>
        <li>pocketbase</li>
      </ul>
      <Switch />
      <DropdownMenu />
      <Select />
      <Modal />
      <Popover />
    </div>
  );
}
