import { Component, Input } from '@angular/core';
import { Node } from '../../models/node';

@Component({
  selector: 'nodeVisual',
  standalone: true,
  templateUrl: './node-visual.component.html',  
})
export class NodeVisualComponent {
  @Input('node') node!: Node;
}
