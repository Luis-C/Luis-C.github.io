import{$ as Sd,$t as vh,A as Fe$1,At as he,B as Mh,Bt as lr,C as C_,Ct as fg,D as Dh,Dt as gl,E as Dg,F as Jh,Ft as jl,G as Pr,Gt as pl,H as O,Ht as mc,I as K,It as k,J as Qe$1,Jt as rF,K as Ps,Kt as qh,L as Le$1,Lt as kl,M as H,Mt as j,N as Ih,Nt as ja,O as E,Ot as h,P as J_,Pt as jf,Q as S_,R as Li,Rt as km,S as CE,St as f_,T as DV,Tt as fn$1,U as Oh,Ut as oF,V as N_,Vt as m_,W as Ph,Wt as oH,X as Rg,Xt as ss,Y as RV,Yt as ro,Z as Rh,Zt as ul,_ as y9,_t as dr,a as L7,an as x,at as X0,b as $m,bt as fD,c as R4,cn as xh,ct as _V,d as f7,dn as ye$1,dt as an,en as vl,et as Tf,f as g9,fn as ze$1,ft as bg,g as s7,gt as dn$1,h as r7,ht as de$1,i as E4,in as wt,it as X,j as Fl,jt as hl,k as EV,kt as h_,l as _2,ln as xl,lt as aD,m as m7,mt as cD,nn as w_,nt as U_,o as M9,on as xV,ot as Xh,p as i7,pt as bt,q as Pt,qt as qi,r as A2,rn as wh,rt as Uh,s as N7,sn as x_,st as Zi,tn as vp,tt as Th,u as a7,un as y_,ut as aH,v as $h,vt as ds,w as Ch,wt as fl,x as Ah,xt as fV,y as $l,yt as ee,z as Me$1,zt as le$1}from"./main-GRTCRLQB.js";import{a as T,c as k$1,i as L,l as z,n as E$1,o as _,t as A}from"./chunk--snw1v6p.js";var re=(()=>{class n{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}isSignalErrorState(t){if(!t)return!1;let i=t().invalid(),a=t().touched();return i&&a}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var Ue=new E(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var se=new E(`MatChipAvatar`);var le=new E(`MatChipTrailingIcon`);var de=new E(`MatChipEdit`);var pe=new E(`MatChipRemove`);var me=new E(`MatChip`);var ue=(()=>{class n{_elementRef=h(ye$1);_parentChip=h(me);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){h(ro).load(EV),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,a){i&2&&(ul(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),Zi(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,vl],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:oF(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var Ze=(()=>{class n extends ue{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(a){return(t||(t=jf(n)))(a||n)}})();static ɵdir=wt({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,a){i&1&&xh(`click`,function(c){return a._handleClick(c)})(`keydown`,function(c){return a._handleKeydown(c)}),i&2&&(ul(`tabindex`,a._getTabindex()),Zi(`mdc-evolution-chip__action--presentational`,!1))},features:[vh]})}return n})();var ri=(()=>{class n{_changeDetectorRef=h(rF);_elementRef=h(ye$1);_tagName=h(X0);_ngZone=h(H);_focusMonitor=h(cD);_globalRippleOptions=h($l,{optional:!0});_document=h(k);_onFocus=new O;_onBlur=new O;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ds();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=h(jl).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new le$1;destroyed=new le$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=h(oH);_injector=h(K);constructor(){let t=h(ro);t.load(EV),t.load(Rg),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=km(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let a=i._elementRef.nativeElement;return a===t||a.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],i=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(c,r){c&1&&(Li(0,`span`,3),S_(1,1),fl())}function o(c,r){c&1&&(Li(0,`span`,7),S_(1,2),fl())}return dn$1({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(r,s,p){if(r&1&&Rh(p,se,5)(p,de,5)(p,le,5)(p,pe,5)(p,se,5)(p,le,5)(p,de,5)(p,pe,5),r&2){let d;N_(d=x_())&&(s.leadingIcon=d.first),N_(d=x_())&&(s.editIcon=d.first),N_(d=x_())&&(s.trailingIcon=d.first),N_(d=x_())&&(s.removeIcon=d.first),N_(d=x_())&&(s._allLeadingIcons=d),N_(d=x_())&&(s._allTrailingIcons=d),N_(d=x_())&&(s._allEditIcons=d),N_(d=x_())&&(s._allRemoveIcons=d)}},viewQuery:function(r,s){if(r&1&&Oh(Ze,5),r&2){let p;N_(p=x_())&&(s.primaryAction=p.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(r,s){r&1&&xh(`keydown`,function(d){return s._handleKeydown(d)}),r&2&&(Mh(`id`,s.id),ul(`role`,s.role)(`aria-label`,s.ariaLabel),U_(`mat-`+(s.color||`primary`)),Zi(`mdc-evolution-chip`,!s._isBasicChip)(`mdc-evolution-chip--disabled`,s.disabled)(`mdc-evolution-chip--with-trailing-action`,s._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,s.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,s.leadingIcon)(`mdc-evolution-chip--with-avatar`,s.leadingIcon)(`mat-mdc-chip-with-avatar`,s.leadingIcon)(`mat-mdc-chip-highlighted`,s.highlighted)(`mat-mdc-chip-disabled`,s.disabled)(`mat-mdc-basic-chip`,s._isBasicChip)(`mat-mdc-standard-chip`,!s._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,s._hasTrailingIcon())(`_mat-animation-noopable`,s._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,vl],highlighted:[2,`highlighted`,`highlighted`,vl],disableRipple:[2,`disableRipple`,`disableRipple`,vl],disabled:[2,`disabled`,`disabled`,vl]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[qh([{provide:me,useExisting:n}])],ngContentSelectors:i,decls:9,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mat-mdc-chip-touch-target`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(r,s){r&1&&(C_(t),Th(0,`span`,0),Li(1,`span`,1)(2,`span`,2),f_(3,a,2,0,`span`,3),Li(4,`span`,4),S_(5),Th(6,`span`,5),fl(),Th(7,`span`,6),fl()(),f_(8,o,2,0,`span`,7)),r&2&&(CE(3),h_(s.leadingIcon?3:-1),CE(5),h_(s._hasTrailingIcon()?8:-1))},dependencies:[ue],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return n})();var ve=(()=>{class n{_elementRef=h(ye$1);_changeDetectorRef=h(rF);_dir=h(aD,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new O;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new an;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Ps(null),$m(()=>km(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ps(this._chips)).subscribe(t=>{let i=[];t.forEach(a=>a._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Fl(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(dr(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(dr(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ps(null),dr(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(dr(this._destroyed)).subscribe(t=>{let a=this._chips.toArray().indexOf(t.chip),o=t.chip._hasFocus(),c=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),r=o||c;this._isValidIndex(a)&&r&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){return dn$1({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(a,o,c){if(a&1&&Rh(c,ri,5),a&2){let r;N_(r=x_())&&(o._chips=r)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(a,o){a&1&&xh(`keydown`,function(r){return o._handleKeydown(r)}),a&2&&ul(`role`,o.role)},inputs:{disabled:[2,`disabled`,`disabled`,vl],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?0:oF(i)]},ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(C_(),pl(0,`div`,0),S_(1),hl())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return n})();var ge=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({providers:[re,{provide:Ue,useValue:{separatorKeyCodes:[13]}}],imports:[aH,bg]})}return n})();var fe=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=RV(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=RV(t)}_inset=!1;static ɵfac=function(i){return new(i||n)};static ɵcmp=dn$1({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(i,a){i&2&&(ul(`aria-orientation`,a.vertical?`vertical`:`horizontal`),Zi(`mat-divider-vertical`,a.vertical)(`mat-divider-horizontal`,!a.vertical)(`mat-divider-inset`,a.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(i,a){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var _e=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({imports:[bg]})}return n})();var kt=(()=>{class n{_listeners=[];notify(t,i){for(let a of this._listeners)a(t,i)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var si=new E(`CdkAccordion`);var ye=(()=>{class n{_stateChanges=new O;_openCloseAllActions=new O;id=h(jl).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,vl]},exportAs:[`cdkAccordion`],features:[qh([{provide:si,useExisting:n}]),Tf]})}return n})();var be=(()=>{class n{accordion=h(si,{optional:!0,skipSelf:!0});_changeDetectorRef=h(rF);_expansionDispatcher=h(kt);_openCloseAllSubscription=ee.EMPTY;closed=new le$1;opened=new le$1;destroyed=new le$1;expandedChange=new le$1;id=h(jl).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=bt(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((t,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==t&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,vl],disabled:[2,`disabled`,`disabled`,vl]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[qh([{provide:si,useValue:void 0}])]})}return n})();var xe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({})}return n})();var li=new E(`MAT_ACCORDION`);var we=new E(`MAT_EXPANSION_PANEL`);var di=(()=>{class n{_template=h(Pr);_expansionPanel=h(we,{optional:!0});static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return n})();var Ce=new E(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var pi=(()=>{class n extends be{_viewContainerRef=h(qi);_animationsDisabled=ds();_document=h(k);_ngZone=h(H);_elementRef=h(ye$1);_renderer=h(mc);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_togglePosition;afterExpand=new le$1;afterCollapse=new le$1;_inputChanges=new O;accordion=h(li,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=h(jl).getId(`mat-expansion-panel-header-`);constructor(){super();let t=h(Ce,{optional:!0});this._expansionDispatcher=h(kt),t&&(this.hideToggle=t.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Ps(null),Qe$1(()=>this.expanded&&!this._portal),lr(1)).subscribe(()=>{this._portal=new A2(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}_transitionEndListener=({target:t,propertyName:i})=>{t===this._bodyWrapper?.nativeElement&&i===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let t=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this._transitionEndListener),t.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`body`],i=[`bodyWrapper`],a=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]],o=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function c(r,s){}return dn$1({type:n,selectors:[[`mat-expansion-panel`]],contentQueries:function(s,p,d){if(s&1&&Rh(d,di,5),s&2){let u;N_(u=x_())&&(p._lazyContent=u.first)}},viewQuery:function(s,p){if(s&1&&Oh(t,5)(i,5),s&2){let d;N_(d=x_())&&(p._body=d.first),N_(d=x_())&&(p._bodyWrapper=d.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(s,p){s&2&&Zi(`mat-expanded`,p.expanded)(`mat-expansion-panel-spacing`,p._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,vl],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[qh([{provide:li,useValue:void 0},{provide:we,useExisting:n}]),vh,Tf],ngContentSelectors:o,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(s,p){s&1&&(C_(a),S_(0),Li(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),S_(6,1),Ih(7,c,0,0,`ng-template`,5),fl(),S_(8,2),fl()()),s&2&&(CE(),ul(`inert`,p.expanded?null:``),CE(2),wh(`id`,p.id),ul(`aria-labelledby`,p._headerId),CE(4),wh(`cdkPortalOutlet`,p._portal))},dependencies:[L7],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return n})();var hi=(()=>{class n{panel=h(pi,{host:!0});_element=h(ye$1);_focusMonitor=h(cD);_changeDetectorRef=h(rF);_parentChangeSubscription=ee.EMPTY;constructor(){h(ro).load(EV);let t=this.panel,i=h(Ce,{optional:!0}),a=h(new Jh(`tabindex`),{optional:!0}),o=t.accordion?t.accordion._stateChanges.pipe(Qe$1(c=>!!(c.hideToggle||c.togglePosition))):Pt;this.tabIndex=parseInt(a||``)||0,this._parentChangeSubscription=km(t.opened,t.closed,o,t._inputChanges.pipe(Qe$1(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(Qe$1(()=>t._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:Dg(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`],i=[`mat-panel-title`,`mat-panel-description`,`*`];function a(o,c){o&1&&(pl(0,`span`,1),Sd(),pl(1,`svg`,2),Ch(2,`path`,3),hl()())}return dn$1({type:n,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(c,r){c&1&&xh(`click`,function(){return r._toggle()})(`keydown`,function(p){return r._keydown(p)}),c&2&&(ul(`id`,r.panel._headerId)(`tabindex`,r.disabled?-1:r.tabIndex)(`aria-controls`,r._getPanelId())(`aria-expanded`,r._isExpanded())(`aria-disabled`,r.panel.disabled),Ph(`height`,r._getHeaderHeight()),Zi(`mat-expanded`,r._isExpanded())(`mat-expansion-toggle-indicator-after`,r._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,r._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:oF(o)]},ngContentSelectors:i,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(c,r){c&1&&(C_(t),pl(0,`span`,0),S_(1),S_(2,1),S_(3,2),hl(),f_(4,a,3,0,`span`,1)),c&2&&(Zi(`mat-content-hide-toggle`,!r._showToggle()),CE(4),h_(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return n})();var Se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return n})();var ke=(()=>{class n extends ye{_keyManager;_ownHeaders=new an;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(Ps(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Fl(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let t;return function(a){return(t||(t=jf(n)))(a||n)}})();static ɵdir=wt({type:n,selectors:[[`mat-accordion`]],contentQueries:function(i,a,o){if(i&1&&Rh(o,hi,5),i&2){let c;N_(c=x_())&&(a._headers=c)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(i,a){i&2&&Zi(`mat-accordion-multi`,a.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,vl],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[qh([{provide:li,useExisting:n}]),vh]})}return n})();var Ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({imports:[xe,N7,bg]})}return n})();var Me=_V();function Te(n){return new Vt(n.get(M9),n.get(k))}var Vt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=xV(-this._previousScrollPosition.left),e.style.top=xV(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,a=t.style,o=i.scrollBehavior||``,c=a.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),Me&&(i.scrollBehavior=a.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Me&&(i.scrollBehavior=o,a.scrollBehavior=c)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function Re(n,e){return new Yt(n.get(g9),n.get(H),n.get(M9),e)}var Yt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,a){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=a}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Qe$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var It=class{enable(){}disable(){}attach(){}};function ui(n,e){return e.some(t=>{let i=n.bottom<t.top,a=n.top>t.bottom,o=n.right<t.left,c=n.left>t.right;return i||a||o||c})}function Ne(n,e){return e.some(t=>{let i=n.top<t.top,a=n.bottom>t.bottom,o=n.left<t.left,c=n.right>t.right;return i||a||o||c})}function Qt(n,e){return new Xt(n.get(g9),n.get(M9),n.get(H),e)}var Xt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,a){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=a}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:a}=this._viewportRuler.getViewportSize();ui(t,[{width:i,height:a,bottom:a,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Fe=(()=>{class n{_injector=h(K);noop=()=>new It;close=t=>Re(this._injector,t);block=()=>Te(this._injector);reposition=t=>Qt(this._injector,t);static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var jt=class{positionStrategy;scrollStrategy=new It;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var Wt=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var ze=(()=>{class n{_attachedOverlays=[];_document=h(k);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,a){return a.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var Le=(()=>{class n extends ze{_ngZone=h(H);_renderer=h(Le$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let a=i.length-1;a>-1;a--){let o=i[a];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var Be=(()=>{class n extends ze{_platform=h(de$1);_ngZone=h(H);_renderer=h(Le$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,a={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,`pointerdown`,this._pointerDownListener,a),o.listen(i,`click`,this._clickListener,a),o.listen(i,`auxclick`,this._clickListener,a),o.listen(i,`contextmenu`,this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Fe$1(t)};_clickListener=t=>{let i=Fe$1(t),a=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let c=o.length-1;c>-1;c--){let r=o[c],s=r._outsidePointerEvents;if(!(!r.hasAttached()||!this.canReceiveEvent(r,t,s))){if(Ee(r.overlayElement,i)||Ee(r.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>s.next(t)):s.next(t)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();function Ee(n,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var He=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=dn$1({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Ve=(()=>{class n{_platform=h(de$1);_containerElement;_document=h(k);_styleLoader=h(ro);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||DV()){let a=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<a.length;o++)a[o].remove()}let i=this._document.createElement(`div`);i.classList.add(t),DV()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(He)}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var vi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,a){this._renderer=t,this._ngZone=i,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,a)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function gi(n){return n&&n.nodeType===1}var mi=bt([]);var Gt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(e,t,i,a,o,c,r,s,p,d=!1,u,S){this._portalOutlet=e,this._host=t,this._pane=i,this._config=a,this._ngZone=o,this._keyboardDispatcher=c,this._document=r,this._location=s,this._outsideClickDispatcher=p,this._animationsDisabled=d,this._injector=u,this._renderer=S,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Xh(()=>{mi.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=vp(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Xh(()=>{mi.update(t=>t.filter(i=>i!==this))}),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Xh(()=>{mi.update(t=>t.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=x(x({},this._config),e),this._updateElementSize()}setDirection(e){this._config=X(x({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=xV(this._config.width),e.height=xV(this._config.height),e.minWidth=xV(this._config.minWidth),e.minHeight=xV(this._config.minHeight),e.maxWidth=xV(this._config.maxWidth),e.maxHeight=xV(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;gi(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new vi(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let a=kl(t||[]).filter(o=>!!o);a.length&&(i?e.classList.add(...a):e.classList.remove(...a))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=vp(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var Oe=`cdk-overlay-connected-position-bounding-box`;var en=/([A-Za-z%]+)$/;function Ut(n,e){return new qt(e,n.get(M9),n.get(k),n.get(de$1),n.get(Ve))}var qt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,a,o){this._viewportRuler=t,this._document=i,this._platform=a,this._overlayContainer=o,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Oe),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,a=this._containerRect,o=[],c;for(let r of this._preferredPositions){let s=this._getOriginPoint(e,a,r),p=this._getOverlayPoint(s,t,r),d=this._getOverlayFit(p,t,i,r);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(r,s);return}if(this._canFitWithFlexibleDimensions(d,p,i)){o.push({position:r,origin:s,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(s,r)});continue}(!c||c.overlayFit.visibleArea<d.visibleArea)&&(c={overlayFit:d,overlayPoint:p,originPoint:s,position:r,overlayRect:t})}if(o.length){let r=null,s=-1;for(let p of o){let d=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);d>s&&(s=d,r=p)}this._isPushed=!1,this._applyPosition(r.position,r.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(c.position,c.originPoint);return}this._applyPosition(c.position,c.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&rt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Oe),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof ye$1?this._origin.nativeElement:gi(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let a;if(i.originX==`center`)a=e.left+e.width/2;else{let c=this._isRtl()?e.right:e.left,r=this._isRtl()?e.left:e.right;a=i.originX==`start`?c:r}t.left<0&&(a-=t.left);let o;return i.originY==`center`?o=e.top+e.height/2:o=i.originY==`top`?e.top:e.bottom,t.top<0&&(o-=t.top),{x:a,y:o}}_getOverlayPoint(e,t,i){let a;i.overlayX==`center`?a=-t.width/2:i.overlayX===`start`?a=this._isRtl()?-t.width:0:a=this._isRtl()?0:-t.width;let o;return i.overlayY==`center`?o=-t.height/2:o=i.overlayY==`top`?0:-t.height,{x:e.x+a,y:e.y+o}}_getOverlayFit(e,t,i,a){let o=De(t),{x:c,y:r}=e,s=this._getOffset(a,`x`),p=this._getOffset(a,`y`);s&&(c+=s),p&&(r+=p);let d=0-c,u=c+o.width-i.width,S=0-r,P=r+o.height-i.height,N=this._subtractOverflows(o.width,d,u),H=this._subtractOverflows(o.height,S,P),yi=N*H;return{visibleArea:yi,isCompletelyWithinViewport:o.width*o.height===yi,fitsInViewportVertically:H===o.height,fitsInViewportHorizontally:N==o.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let a=i.bottom-t.y,o=i.right-t.x,c=Pe(this._overlayRef.getConfig().minHeight),r=Pe(this._overlayRef.getConfig().minWidth),s=e.fitsInViewportVertically||c!=null&&c<=a,p=e.fitsInViewportHorizontally||r!=null&&r<=o;return s&&p}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let a=De(t),o=this._viewportRect,c=Math.max(e.x+a.width-o.width,0),r=Math.max(e.y+a.height-o.height,0),s=Math.max(o.top-i.top-e.y,0),p=Math.max(o.left-i.left-e.x,0),d=0,u=0;return a.width<=o.width?d=p||-c:d=e.x<this._getViewportMarginStart()?o.left-i.left-e.x:0,a.height<=o.height?u=s||-r:u=e.y<this._getViewportMarginTop()?o.top-i.top-e.y:0,this._previousPushAmount={x:d,y:u},{x:e.x+d,y:e.y+u}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!nn(this._lastScrollVisibility,i)){let a=new Wt(e,i);this._positionChanges.next(a)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,a=e.overlayY;e.overlayX===`center`?i=`center`:this._isRtl()?i=e.overlayX===`start`?`right`:`left`:i=e.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${i} ${a}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,a=this._isRtl(),o,c,r;if(t.overlayY===`top`)c=e.y,o=i.height-c+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)r=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-r+this._getViewportMarginTop();else{let P=Math.min(i.bottom-e.y+i.top,e.y),N=this._lastBoundingBoxSize.height;o=P*2,c=e.y-P,o>N&&!this._isInitialRender&&!this._growAfterOpen&&(c=e.y-N/2)}let s=t.overlayX===`start`&&!a||t.overlayX===`end`&&a,p=t.overlayX===`end`&&!a||t.overlayX===`start`&&a,d,u,S;if(p)S=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(s)u=e.x,d=i.right-e.x-this._getViewportMarginEnd();else{let P=Math.min(i.right-e.x+i.left,e.x),N=this._lastBoundingBoxSize.width;d=P*2,u=e.x-P,d>N&&!this._isInitialRender&&!this._growAfterOpen&&(u=e.x-N/2)}return{top:c,left:u,bottom:r,right:S,width:d,height:o}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left=`0`,a.bottom=a.right=`auto`,a.maxHeight=a.maxWidth=``,a.width=a.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,c=this._overlayRef.getConfig().maxWidth;a.width=xV(i.width),a.height=xV(i.height),a.top=xV(i.top)||`auto`,a.bottom=xV(i.bottom)||`auto`,a.left=xV(i.left)||`auto`,a.right=xV(i.right)||`auto`,t.overlayX===`center`?a.alignItems=`center`:a.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?a.justifyContent=`center`:a.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(a.maxHeight=xV(o)),c&&(a.maxWidth=xV(c))}this._lastBoundingBoxSize=i,rt(this._boundingBox.style,a)}_resetBoundingBoxStyles(){rt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){rt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let i={},a=this._hasExactPosition(),o=this._hasFlexibleDimensions,c=this._overlayRef.getConfig();if(a){let d=this._viewportRuler.getViewportScrollPosition();rt(i,this._getExactOverlayY(t,e,d)),rt(i,this._getExactOverlayX(t,e,d))}else i.position=`static`;let r=``,s=this._getOffset(t,`x`),p=this._getOffset(t,`y`);s&&(r+=`translateX(${s}px) `),p&&(r+=`translateY(${p}px)`),i.transform=r.trim(),c.maxHeight&&(a?i.maxHeight=xV(c.maxHeight):o&&(i.maxHeight=``)),c.maxWidth&&(a?i.maxWidth=xV(c.maxWidth):o&&(i.maxWidth=``)),rt(this._pane.style,i)}_getExactOverlayY(e,t,i){let a={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),e.overlayY===`bottom`)a.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else a.top=xV(o.y);return a}_getExactOverlayX(e,t,i){let a={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let c;if(this._isRtl()?c=e.overlayX===`end`?`left`:`right`:c=e.overlayX===`end`?`right`:`left`,c===`right`)a.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else a.left=xV(o.x);return a}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ne(e,i),isOriginOutsideView:ui(e,i),isOverlayClipped:Ne(t,i),isOverlayOutsideView:ui(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,a)=>i-Math.max(a,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&kl(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof ye$1)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let i=t.getBoundingClientRect();return e&&(t.style.display=``),i}};function rt(n,e){for(let t in e)Object.hasOwn(e,t)&&(n[t]=e[t]);return n}function Pe(n){if(typeof n!=`number`&&n!=null){let[e,t]=n.split(en);return!t||t===`px`?parseFloat(e):null}return n||null}function De(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function nn(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var Ae=`cdk-global-overlay-wrapper`;function Ye(n){return new Kt}var Kt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(Ae),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:a,height:o,maxWidth:c,maxHeight:r}=this._overlayRef.getConfig(),s=(a===`100%`||a===`100vw`)&&(!c||c===`100%`||c===`100vw`),p=(o===`100%`||o===`100vh`)&&(!r||r===`100%`||r===`100vh`),d=this._xPosition,u=this._xOffset,S=this._overlayRef.getConfig().direction===`rtl`,P=``,N=``,H=``;s?H=`flex-start`:d===`center`?(H=`center`,S?N=u:P=u):S?d===`left`||d===`end`?(H=`flex-end`,P=u):(d===`right`||d===`start`)&&(H=`flex-start`,N=u):d===`left`||d===`start`?(H=`flex-start`,P=u):(d===`right`||d===`end`)&&(H=`flex-end`,N=u),e.position=this._cssPosition,e.marginLeft=s?`0`:P,e.marginTop=p?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=s?`0`:N,t.justifyContent=H,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(Ae),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var Xe=(()=>{class n{_injector=h(K);global(){return Ye()}flexibleConnectedTo(t){return Ut(this._injector,t)}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var je=new E(`OVERLAY_DEFAULT_CONFIG`);function Zt(n,e){n.get(ro).load(He);let t=n.get(Ve),i=n.get(k),a=n.get(jl),o=n.get(fn$1),c=n.get(aD),r=n.get(mc,null,{optional:!0})||n.get(Le$1).createRenderer(null,null),s=new jt(e),p=n.get(je,null,{optional:!0})?.usePopover??!0;s.direction=s.direction||c.value,!i.body||!(`showPopover`in i.body)?s.usePopover=!1:s.usePopover=e?.usePopover??p;let d=i.createElement(`div`),u=i.createElement(`div`);d.id=a.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),u.appendChild(d),s.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let S=s.usePopover?s.positionStrategy?.getPopoverInsertionPoint?.():null;return gi(S)?S.after(u):S?.type===`parent`?S.element.appendChild(u):t.getContainerElement().appendChild(u),new Gt(new R4(d,o,n),u,d,s,n.get(H),n.get(Le),i,n.get(fg),n.get(Be),e?.disableAnimations??n.get(ja,null,{optional:!0})===`NoopAnimations`,n.get(he),r)}var We=(()=>{class n{scrollStrategies=h(Fe);_positionBuilder=h(Xe);_injector=h(K);create(t){return Zt(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=j({token:n,factory:n.ɵfac})}return n})();var fi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({providers:[We],imports:[bg,N7,y9,y9]})}return n})();var on=20;var cn=new E(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=h(K);return()=>Qt(n,{scrollThrottle:on})}});var rn=new E(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ge=`tooltip-panel`;var sn={passive:!0};var ln=8;var dn=8;var pn=24;var hn=200;var _i=(()=>{class n{_elementRef=h(ye$1);_ngZone=h(H);_platform=h(de$1);_ariaDescriber=h(fV);_focusMonitor=h(cD);_dir=h(aD);_injector=h(K);_viewContainerRef=h(qi);_mediaMatcher=h(ss);_document=h(k);_renderer=h(mc);_animationsDisabled=ds();_defaultOptions=h(rn,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=qe;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=RV(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=RV(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=xl(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=xl(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new O;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=ln}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(dr(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(i);this._detach(),this._portal=this._portal||new _2(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=a.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(dr(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let c=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&c._origin instanceof ye$1)return this._overlayRef;this._detach()}let i=this._injector.get(g9).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Ge}`,o=Ut(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return o.positionChanges.pipe(dr(this._destroyed)).subscribe(c=>{this._updateCurrentPositionClass(c.connectionPair),this._tooltipInstance&&c.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Zt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(cn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(dr(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(dr(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(dr(this._destroyed)).subscribe(c=>{c.preventDefault(),c.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(dr(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,a=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(x(x({},a.main),o.main)),this._addOffset(x(x({},a.fallback),o.fallback))])}_addOffset(t){let i=dn,a=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-i:t.originY===`bottom`?t.offsetY=i:t.originX===`start`?t.offsetX=a?-i:i:t.originX===`end`&&(t.offsetX=a?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,a;i==`above`||i==`below`?a={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&t||i==`right`&&!t?a={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(a={originX:`end`,originY:`center`});let{x:o,y:c}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:o,originY:c}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,a;i==`above`?a={overlayX:`center`,overlayY:`bottom`}:i==`below`?a={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&t||i==`right`&&!t?a={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(a={overlayX:`start`,overlayY:`center`});let{x:o,y:c}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:o,overlayY:c}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),vp(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:a,originY:o}=t,c;if(i===`center`?this._dir&&this._dir.value===`rtl`?c=a===`end`?`left`:`right`:c=a===`start`?`left`:`right`:c=i===`bottom`&&o===`top`?`above`:`below`,c!==this._currentPosition){let r=this._overlayRef;if(r){let s=`${this._cssClassPrefix}-${Ge}-`;r.removePanelClass(s+this._currentPosition),r.addPanelClass(s+c)}this._currentPosition=c}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let i=t.targetTouches?.[0],a=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),a=this._elementRef.nativeElement;i!==a&&!a.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,i,sn))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let i=this._elementRef.nativeElement,a=i.style;(t===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect=`none`),(t===`on`||!i.draggable)&&(a.webkitUserDrag=`none`),a.touchAction=`none`,a.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||vp({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Dg(t):!0;static ɵfac=function(i){return new(i||n)};static ɵdir=wt({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,a){i&2&&Zi(`mat-mdc-tooltip-disabled`,a.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var qe=(()=>{class n{_changeDetectorRef=h(rF);_elementRef=h(ye$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ds();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new O;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pn&&t.width>=hn}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,a=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(t?o:a),i.classList.add(t?a:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let c=getComputedStyle(i);(c.getPropertyValue(`animation-duration`)===`0s`||c.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(i){return new(i||n)};static ɵcmp=(function(){let t=[`tooltip`];return dn$1({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(a,o){if(a&1&&Oh(t,7),a&2){let c;N_(c=x_())&&(o._tooltip=c.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(a,o){a&1&&xh(`mouseleave`,function(r){return o._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(a,o){a&1&&(pl(0,`div`,1,0),Ah(`animationend`,function(r){return o._handleAnimationEnd(r)}),pl(2,`div`,2),J_(3),hl()()),a&2&&(U_(o.tooltipClass),Zi(`mdc-tooltip--multiline`,o._isMultiline),CE(3),Uh(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return n})();var Ke=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ze$1({type:n});static ɵinj=Me$1({imports:[fD,fi,bg,E4]})}return n})();var un=(n,e)=>e.skill;var vn=(n,e)=>e.title;var gn=(n,e)=>e.id;function fn(n,e){n&1&&Th(0,`fa-icon`,14),n&2&&wh(`icon`,e)}function _n(n,e){if(n&1&&(Li(0,`span`),J_(1),fl()),n&2){let t=w_().$implicit;CE(),Uh(t.skill)}}function yn(n,e){if(n&1&&(Li(0,`mat-chip`,4),f_(1,fn,1,1,`fa-icon`,14)(2,_n,2,1,`span`),fl()),n&2){let t,i=e.$implicit;wh(`matTooltip`,i.skill),Dh(`aria-label`,i.skill),CE(),h_((t=i.icon)?1:2,t)}}function bn(n,e){if(n&1&&J_(0),n&2){let t=w_().$implicit;gl(` `,t.description,` `)}}function xn(n,e){if(n&1&&(Li(0,`mat-expansion-panel`)(1,`mat-expansion-panel-header`)(2,`mat-panel-title`),J_(3),fl()(),Ih(4,bn,1,1,`ng-template`,15),fl()),n&2){let t=e.$implicit,i=e.$index;CE(3),$h(` `,i+1,` - `,t.title,` `)}}function wn(n,e){if(n&1&&(Li(0,`mat-chip`,8)(1,`span`,16),J_(2),fl()()),n&2){let t=e.$implicit;wh(`matTooltip`,t.id),CE(2),Uh(t.course)}}var Qe=class n{skills=[{skill:`HTML`,icon:m7},{skill:`JavaScript`,icon:f7},{skill:`CSS`,icon:i7},{skill:`Java`,icon:r7},{skill:`Python`,icon:s7},{skill:`Flutter`},{skill:`TypeScript`},{skill:`C`},{skill:`SwiftUI`},{skill:`LaTeX`},{skill:`Eclipse`},{skill:`Git`},{skill:`Firebase`},{skill:`Visual Studio Code`},{skill:`Anaconda`},{skill:`PuTTY`},{skill:`VM VirtualBox`},{skill:`PowerShell`},{skill:`Office`}];courses=[{course:`Crime & Conflict in Cyberspace`,id:`BIT 5114`},{course:`Federal Cybersecurity Policy`,id:`SPIA 4374`},{course:`CyberLeaders Capstone (Machine Learning)`,id:`SPIA 4724`},{course:`Internet Law`,id:`FIN 4014`},{course:`Computer Security`,id:`CS 4264`},{course:`Machine Learning`,id:`CS 4824`},{course:`Mobile Software Development`,id:`CS 3714`},{course:`Cloud Software Development`,id:`CS 3754`},{course:`Systems and Networking Capstone (Blockchain)`,id:`CS 4284`},{course:`Computer Music`,id:`MUS 3066`},{course:`Linux Laptop Orchestra`,id:`MUS 3314`}];strengths=[{title:`Learner`,description:`People who are especially talented in the Learner theme have a great desire to learn and want to continuously improve. In particular, the process of learning, rather than the outcome, excites them.`},{title:`Deliberative`,description:`People who are especially talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate the obstacles.`},{title:`Analytical`,description:`People who are especially talented in the Analytical theme search for reasons and causes. They have the ability to think about all the factors that might affect a situation.`},{title:`Achiever`,description:`People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They take great satisfaction from being busy and productive.`},{title:`Input`,description:`People who are especially talented in the Input theme have a craving to know more. Often they like to collect and archive all kinds of information.`}];static ɵfac=function(t){return new(t||n)};static ɵcmp=dn$1({type:n,selectors:[[`app-home`]],decls:89,vars:0,consts:[[1,`container`],[1,`card`],[`mat-card-image`,``,`src`,`assets/images/avatar2.png`,`alt`,`profile`],[`aria-label`,`Skills`],[`tabindex`,`0`,3,`matTooltip`,`aria-label`],[`mat-card-image`,``,`src`,`assets/images/avatar.png`,`alt`,`profile`],[`mat-card-image`,``,`src`,`assets/images/avatar3.png`,`alt`,`profile`],[`aria-label`,`Additional courses`],[`tabindex`,`0`,3,`matTooltip`],[`mat-card-image`,``,`src`,`assets/images/cyberleaders.png`,`alt`,`CyberLeaders`],[`href`,`https://www.hume.vt.edu/cyberlead`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`mat-card-image`,``,`src`,`assets/images/culture.png`,`alt`,`Language and Culture`],[`mat-card-image`,``,`src`,`assets/images/drawing.png`,`alt`,`Drawing`],[`mat-card-image`,``,`src`,`assets/images/dragon.png`,`alt`,`Dragon Boat`],[`size`,`2x`,3,`icon`],[`matExpansionPanelContent`,``],[1,`chip-text`]],template:function(t,i){t&1&&(Li(0,`div`,0)(1,`mat-card`,1),Th(2,`img`,2),Li(3,`mat-card-title-group`)(4,`mat-card-title`),J_(5,` Luis Hernandez `),fl(),Li(6,`mat-card-subtitle`),J_(7,` Computer Science | Virginia Tech 2020 `),fl()(),Th(8,`mat-divider`),Li(9,`mat-card-content`),J_(10,` Interested in Cybersecurity, Machine Learning, App development, and happiness. `),fl()(),Li(11,`mat-card`,1)(12,`mat-card-title`),J_(13,` Skills: `),fl(),Th(14,`mat-divider`)(15,`br`),Li(16,`mat-card-content`)(17,`mat-chip-set`,3),m_(18,yn,3,3,`mat-chip`,4,un),fl()()(),Li(20,`mat-card`,1)(21,`mat-card-title`),J_(22,` Top Clifton Strenghts: `),fl(),Th(23,`mat-divider`)(24,`br`),Li(25,`mat-card-content`)(26,`mat-accordion`),m_(27,xn,5,2,`mat-expansion-panel`,null,vn),fl()()(),Li(29,`mat-card`,1),Th(30,`img`,5)(31,`mat-divider`)(32,`br`),Li(33,`mat-card-content`),J_(34,` For college I took three different Myers Briggs personality tests, 3/3 conclude I'm an INTJ. My peers would describe me as analytical. I'm a nerd with a sense of humor. `),fl()(),Li(35,`mat-card`,1),Th(36,`img`,6),Li(37,`mat-card-title`),J_(38,` Once Upon a Time... `),fl(),Th(39,`mat-divider`),Li(40,`mat-card-content`),J_(41,` I was born in the land of opportunity, raised with Mexican heritage and cursed with curiosity. `),Th(42,`br`)(43,`br`),J_(44,` Now I roam this earthly realm learning about the world that surrounds me, pondering about how to improve it and myself. `),fl()(),Li(45,`mat-card`,1)(46,`mat-card-title`),J_(47,` Additional Courses: `),fl(),Li(48,`mat-card-subtitle`),J_(49,` Beyond the standard curriculum. `),fl(),Th(50,`mat-divider`)(51,`br`),Li(52,`mat-card-content`)(53,`mat-chip-set`,7),m_(54,wn,3,2,`mat-chip`,8,gn),fl()()(),Li(56,`mat-card`,1),Th(57,`img`,9),Li(58,`mat-card-title`),J_(59,` Cybersecurity `),fl(),Li(60,`mat-card-content`),J_(61,` The `),Li(62,`a`,10),J_(63,`CyberLeaders program`),fl(),J_(64,` is designed to help students broaden their understanding of policy, regulation, and the engineering challenges in cybersecurity. `),Th(65,`br`)(66,`br`),J_(67,` The semester-long Capstone Research program involved an interdisciplinary discussion of the nature of "Fake News," and the potential use of Machine Learning to mitigate the issue. `),fl()(),Li(68,`mat-card`,1),Th(69,`img`,11),Li(70,`mat-card-title`),J_(71,` Language and Culture `),fl(),Li(72,`mat-card-content`),J_(73,` Due to my ethnical background I've had experience living abroad in Mexico. I'm fully bilingual with 10+ years of experience with Spanish. `),fl()(),Li(74,`mat-card`,1),Th(75,`img`,12),Li(76,`mat-card-title`),J_(77,` Drawing `),fl(),Li(78,`mat-card-content`),J_(79,` I aim for a high standard of creativty and passion in everything I do. I have experience with graphical software such as Clip Studio, Corel Painter, and Photoshop. `),fl()(),Li(80,`mat-card`,1),Th(81,`img`,13),Li(82,`mat-card-title`),J_(83,` Dragon Boat `),fl(),Li(84,`mat-card-content`),J_(85,` There are no star players in Dragon Boat, victory is achieved through determination, discipline, and team-work. `),Th(86,`br`)(87,`br`),J_(88,` I've had the honor of representing the United States during the 2015 World Championships earning two bronze medals for the 500m and 2000m races (Under 18 division). `),fl()()()),t&2&&(CE(18),y_(i.skills),CE(9),y_(i.strengths),CE(27),y_(i.courses))},dependencies:[L,_,z,E$1,T,A,k$1,ge,ri,ve,_e,fe,Ie,ke,pi,hi,Se,di,Ke,_i,a7],styles:[`[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1440px;margin:auto;padding:24px 12px}.card[_ngcontent-%COMP%]{flex:1 1 clamp(332px,25vw + 32px,400px);min-width:0;max-width:400px}mat-card-title[_ngcontent-%COMP%], mat-card-title-group[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%]{padding:0 16px}mat-card-title-group[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], mat-card-title-group[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{padding:0}mat-card-content[_ngcontent-%COMP%]{padding-top:16px}img[_ngcontent-%COMP%]{width:100%;height:auto}mat-expansion-panel[_ngcontent-%COMP%]{overflow-wrap:anywhere}mat-chip[_ngcontent-%COMP%]{--%NS%mat-chip-elevated-container-color: #ffecb3;--%NS%mat-chip-label-text-color: #212121;max-width:100%;height:auto;min-height:40px}.chip-text[_ngcontent-%COMP%]{display:block;padding:6px 0;white-space:normal}`]})};export{Qe as HomeComponent};