/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import type ChatTopbar from './topbar';
import appMediaPlaybackController, {AppMediaPlaybackController} from '../appMediaPlaybackController';
import DivAndCaption from '../divAndCaption';
import PinnedContainer, {WrapPinnedContainerOptions} from './pinnedContainer';
import Chat from './chat';
import cancelEvent from '../../helpers/dom/cancelEvent';
import {attachClickEvent} from '../../helpers/dom/clickEvent';
import replaceContent from '../../helpers/dom/replaceContent';
import PeerTitle from '../peerTitle';
import {i18n} from '../../lib/langPack';
import {formatFullSentTime} from '../../helpers/date';
import ButtonIcon from '../buttonIcon';
import {DocumentAttribute} from '../../layer';
import MediaProgressLine from '../mediaProgressLine';
import VolumeSelector from '../volumeSelector';
import wrapEmojiText from '../../lib/richTextProcessor/wrapEmojiText';
import {AppManagers} from '../../lib/appManagers/managers';
import Icon from '../icon';
import Button, {replaceButtonIcon} from '../button';
import getFwdFromName from '../../lib/appManagers/utils/messages/getFwdFromName';
import ReplyContainer from './replyContainer';
import appImManager from '../../lib/appManagers/appImManager';
import rootScope from '../../lib/rootScope';

import {createRoot, JSX, createSignal} from 'solid-js';

export default class ChatCallJoin extends PinnedContainer {
  private toggleEl: HTMLElement;
  private progressLine: MediaProgressLine;
  private volumeSelector: VolumeSelector;
  private fasterEl: HTMLElement;
  private repeatEl: HTMLButtonElement;

  constructor(protected topbar: ChatTopbar, protected chat: Chat, protected managers: AppManagers) {
    const dac = new DivAndCaption('pinned-call', (options: WrapPinnedContainerOptions) => {
      replaceContent(this.divAndCaption.title, options.title);
      replaceContent(this.divAndCaption.subtitle, options.subtitle);
    });

    const highlight = document.createElement('div');
    highlight.classList.add('pinned-call-highlight');
    highlight.appendChild(dac.container.removeChild(dac.content));
    dac.container.appendChild(highlight);

    const btn = Button('pinned-call-btn', {text: 'LiveStream.Bar.Join'});
    highlight.appendChild(btn);

    super({
      topbar,
      chat,
      listenerSetter: topbar.listenerSetter,
      className: 'call',
      divAndCaption: dac,
      onClose: null,
      floating: true,
      unclosable: true
    });

    this.peerId = chat.peerId;

    // this.divAndCaption.border.remove();
    dac.title.appendChild(i18n('LiveStream.Bar.Title'));
    dac.subtitle.appendChild(i18n('LiveStream.Bar.Watching', [0]));

    this.topbar.listenerSetter.add(rootScope)('chat_update', this.onChatUpdate);
    this.topbar.listenerSetter.add(rootScope)('group_call_update', () => this.onChatUpdate(this.peerId));

    const attachClick = (elem: HTMLElement, callback: () => void) => {
      attachClickEvent(elem, (e) => {
        cancelEvent(e);
        callback();
      }, {listenerSetter: this.topbar.listenerSetter});
    };

    attachClick(btn, () => {
      this.topbar.onJoinGroupCallClick();
    });

    attachClick(this.divAndCaption.container, () => {
      this.topbar.onJoinGroupCallClick();
    })

    this.update();
  }

  peerId: number;

  setPeerId(peerId: number): Promise<void> {
    this.peerId = peerId;
    return this.update();
  }

  private async update() {
    if(!this.peerId.isAnyChat()) {
      this.toggle(true);
      return;
    }

    const chatFull = await this.managers.appProfileManager.getChannelFull(this.peerId.toChatId());
    if(!chatFull.call) {
      this.toggle(true);
      return;
    }
    const groupCall = await this.managers.appGroupCallsManager.getGroupCallFull(chatFull.call.id)
    if(groupCall._ === 'groupCallDiscarded' || !groupCall.pFlags.rtmp_stream) {
      this.toggle(true);
      return;
    }
    this.divAndCaption.subtitle.replaceChildren(i18n('LiveStream.Bar.Watching', [groupCall.participants_count]));
    this.toggle(false);
  }

  private onChatUpdate = (chatId: number | string) => {
    if(chatId === this.chat.peerId.toChatId()) {
      this.update();
    }
  };

  public destroy() {
  }
}
