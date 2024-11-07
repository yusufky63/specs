// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
var sidebarScrollbox = document.querySelector("#sidebar .sidebar-scrollbox");
sidebarScrollbox.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="root.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="background.html"><strong aria-hidden="true">2.</strong> Background</a></li><li class="chapter-item expanded "><a href="protocol/overview.html"><strong aria-hidden="true">3.</strong> OP Stack Protocol</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/bridges.html"><strong aria-hidden="true">3.1.</strong> Bridges</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/messengers.html"><strong aria-hidden="true">3.1.1.</strong> Messengers</a></li><li class="chapter-item expanded "><a href="protocol/deposits.html"><strong aria-hidden="true">3.1.2.</strong> Deposits</a></li><li class="chapter-item expanded "><a href="protocol/withdrawals.html"><strong aria-hidden="true">3.1.3.</strong> Withdrawals</a></li><li class="chapter-item expanded "><a href="protocol/guaranteed-gas-market.html"><strong aria-hidden="true">3.1.4.</strong> Guaranteed Gas Market</a></li><li class="chapter-item expanded "><a href="protocol/proposals.html"><strong aria-hidden="true">3.1.5.</strong> Proposals</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> Clients</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/exec-engine.html"><strong aria-hidden="true">3.2.1.</strong> Execution Engine</a></li><li class="chapter-item expanded "><a href="protocol/rollup-node.html"><strong aria-hidden="true">3.2.2.</strong> Rollup Node</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/rollup-node-p2p.html"><strong aria-hidden="true">3.2.2.1.</strong> Rollup Node P2P</a></li><li class="chapter-item expanded "><a href="protocol/derivation.html"><strong aria-hidden="true">3.2.2.2.</strong> Derivation</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/batcher.html"><strong aria-hidden="true">3.2.3.</strong> Batch Submitter</a></li></ol></li><li class="chapter-item expanded "><a href="fault-proof/index.html"><strong aria-hidden="true">3.3.</strong> Fault Proof</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fault-proof/cannon-fault-proof-vm.html"><strong aria-hidden="true">3.3.1.</strong> Cannon Fault Proof VM</a></li><li class="chapter-item expanded "><a href="fault-proof/stage-one/index.html"><strong aria-hidden="true">3.3.2.</strong> Stage One Decentralization</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fault-proof/stage-one/dispute-game-interface.html"><strong aria-hidden="true">3.3.2.1.</strong> Dispute Game Interface</a></li><li class="chapter-item expanded "><a href="fault-proof/stage-one/fault-dispute-game.html"><strong aria-hidden="true">3.3.2.2.</strong> Fault Dispute Game</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fault-proof/stage-one/honest-challenger-fdg.html"><strong aria-hidden="true">3.3.2.2.1.</strong> Honest Challenger</a></li><li class="chapter-item expanded "><a href="fault-proof/stage-one/bond-incentives.html"><strong aria-hidden="true">3.3.2.2.2.</strong> Bond Incentives</a></li></ol></li><li class="chapter-item expanded "><a href="fault-proof/stage-one/bridge-integration.html"><strong aria-hidden="true">3.3.2.3.</strong> Bridge Integration</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="protocol/precompiles.html"><strong aria-hidden="true">3.4.</strong> Precompiles</a></li><li class="chapter-item expanded "><a href="protocol/predeploys.html"><strong aria-hidden="true">3.5.</strong> Predeploys</a></li><li class="chapter-item expanded "><a href="protocol/preinstalls.html"><strong aria-hidden="true">3.6.</strong> Preinstalls</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> Superchain</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/superchain-configuration.html"><strong aria-hidden="true">3.7.1.</strong> Superchain Configuration</a></li><li class="chapter-item expanded "><a href="protocol/superchain-upgrades.html"><strong aria-hidden="true">3.7.2.</strong> Superchain Upgrades</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/system-config.html"><strong aria-hidden="true">3.8.</strong> System Config</a></li><li class="chapter-item expanded "><a href="protocol/configurability.html"><strong aria-hidden="true">3.9.</strong> Configurability</a></li><li class="chapter-item expanded "><a href="protocol/safe-extensions.html"><strong aria-hidden="true">3.10.</strong> Safe Extensions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/stage-1.html"><strong aria-hidden="true">3.10.1.</strong> Stage 1 Roles and Requirements</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.11.</strong> Protocol Upgrades</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/regolith/overview.html"><strong aria-hidden="true">3.11.1.</strong> Regolith</a></li><li class="chapter-item expanded "><a href="protocol/canyon/overview.html"><strong aria-hidden="true">3.11.2.</strong> Canyon</a></li><li class="chapter-item expanded "><a href="protocol/delta/overview.html"><strong aria-hidden="true">3.11.3.</strong> Delta</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/delta/span-batches.html"><strong aria-hidden="true">3.11.3.1.</strong> Span Batches</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/ecotone/overview.html"><strong aria-hidden="true">3.11.4.</strong> Ecotone</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/ecotone/derivation.html"><strong aria-hidden="true">3.11.4.1.</strong> Derivation</a></li><li class="chapter-item expanded "><a href="protocol/ecotone/l1-attributes.html"><strong aria-hidden="true">3.11.4.2.</strong> L1 attributes</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/fjord/overview.html"><strong aria-hidden="true">3.11.5.</strong> Fjord</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/fjord/exec-engine.html"><strong aria-hidden="true">3.11.5.1.</strong> Execution Engine</a></li><li class="chapter-item expanded "><a href="protocol/fjord/derivation.html"><strong aria-hidden="true">3.11.5.2.</strong> Derivation</a></li><li class="chapter-item expanded "><a href="protocol/fjord/predeploys.html"><strong aria-hidden="true">3.11.5.3.</strong> Predeploys</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/granite/overview.html"><strong aria-hidden="true">3.11.6.</strong> Granite</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/granite/exec-engine.html"><strong aria-hidden="true">3.11.6.1.</strong> Execution Engine</a></li><li class="chapter-item expanded "><a href="protocol/granite/derivation.html"><strong aria-hidden="true">3.11.6.2.</strong> Derivation</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/holocene/overview.html"><strong aria-hidden="true">3.11.7.</strong> Holocene</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/holocene/derivation.html"><strong aria-hidden="true">3.11.7.1.</strong> Derivation</a></li><li class="chapter-item expanded "><a href="protocol/holocene/exec-engine.html"><strong aria-hidden="true">3.11.7.2.</strong> Execution Engine</a></li><li class="chapter-item expanded "><a href="protocol/holocene/system-config.html"><strong aria-hidden="true">3.11.7.3.</strong> System Config</a></li></ol></li><li class="chapter-item expanded "><a href="protocol/isthmus/overview.html"><strong aria-hidden="true">3.11.8.</strong> Isthmus</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocol/isthmus/exec-engine.html"><strong aria-hidden="true">3.11.8.1.</strong> Execution Engine</a></li><li class="chapter-item expanded "><a href="protocol/isthmus/superchain-config.html"><strong aria-hidden="true">3.11.8.2.</strong> Superchain Config</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> Governance</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="governance/gov-token.html"><strong aria-hidden="true">4.1.</strong> Governance Token</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> Experimental</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="experimental/custom-gas-token.html"><strong aria-hidden="true">5.1.</strong> Custom Gas Token</a></li><li class="chapter-item expanded "><a href="experimental/alt-da.html"><strong aria-hidden="true">5.2.</strong> Alt-DA</a></li><li class="chapter-item expanded "><a href="interop/overview.html"><strong aria-hidden="true">5.3.</strong> Interoperability</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interop/dependency-set.html"><strong aria-hidden="true">5.3.1.</strong> Dependency Set</a></li><li class="chapter-item expanded "><a href="interop/messaging.html"><strong aria-hidden="true">5.3.2.</strong> Messaging</a></li><li class="chapter-item expanded "><a href="interop/predeploys.html"><strong aria-hidden="true">5.3.3.</strong> Predeploys</a></li><li class="chapter-item expanded "><a href="interop/sequencer.html"><strong aria-hidden="true">5.3.4.</strong> Sequencer</a></li><li class="chapter-item expanded "><a href="interop/verifier.html"><strong aria-hidden="true">5.3.5.</strong> Verifier</a></li><li class="chapter-item expanded "><a href="interop/rollup-node-p2p.html"><strong aria-hidden="true">5.3.6.</strong> Rollup Node P2P</a></li><li class="chapter-item expanded "><a href="interop/fault-proof.html"><strong aria-hidden="true">5.3.7.</strong> Fault Proof</a></li><li class="chapter-item expanded "><a href="interop/upgrade.html"><strong aria-hidden="true">5.3.8.</strong> Upgrade</a></li><li class="chapter-item expanded "><a href="interop/token-bridging.html"><strong aria-hidden="true">5.3.9.</strong> Token Bridging</a></li><li class="chapter-item expanded "><a href="interop/superchain-weth.html"><strong aria-hidden="true">5.3.10.</strong> SuperchainWETH</a></li><li class="chapter-item expanded "><a href="interop/derivation.html"><strong aria-hidden="true">5.3.11.</strong> Derivation</a></li><li class="chapter-item expanded "><a href="interop/tx-pool.html"><strong aria-hidden="true">5.3.12.</strong> Transaction Pool</a></li></ol></li><li class="chapter-item expanded "><a href="experimental/op-contracts-manager.html"><strong aria-hidden="true">5.4.</strong> OP Contracts Manager</a></li><li class="chapter-item expanded "><a href="experimental/gov-token.html"><strong aria-hidden="true">5.5.</strong> Governance Token</a></li><li class="chapter-item expanded "><a href="experimental/cannon-fault-proof-vm-mt.html"><strong aria-hidden="true">5.6.</strong> Multithreaded Cannon FPVM</a></li></ol></li><li class="chapter-item expanded "><a href="glossary.html"><strong aria-hidden="true">6.</strong> Glossary</a></li></ol>';
(function() {
    let current_page = document.location.href.toString();
    if (current_page.endsWith("/")) {
        current_page += "index.html";
    }
    var links = sidebarScrollbox.querySelectorAll("a");
    var l = links.length;
    for (var i = 0; i < l; ++i) {
        var link = links[i];
        var href = link.getAttribute("href");
        if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
            link.href = path_to_root + href;
        }
        // The "index" page is supposed to alias the first chapter in the book.
        if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
            link.classList.add("active");
            var parent = link.parentElement;
            while (parent) {
                if (parent.tagName === "LI" && parent.previousElementSibling) {
                    if (parent.previousElementSibling.classList.contains("chapter-item")) {
                        parent.previousElementSibling.classList.add("expanded");
                    }
                }
                parent = parent.parentElement;
            }
        }
    }
})();

// Track and set sidebar scroll position
sidebarScrollbox.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        sessionStorage.setItem('sidebar-scroll', sidebarScrollbox.scrollTop);
    }
}, { passive: true });
var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
sessionStorage.removeItem('sidebar-scroll');
if (sidebarScrollTop) {
    // preserve sidebar scroll position when navigating via links within sidebar
    sidebarScrollbox.scrollTop = sidebarScrollTop;
} else {
    // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
    var activeSection = document.querySelector('#sidebar .active');
    if (activeSection) {
        activeSection.scrollIntoView({ block: 'center' });
    }
}