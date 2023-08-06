import styled from 'styled-components';

const Wrapper = styled.aside`
@media (min-width: 992px) {
  display: none;
}
 .sidebar-container {
  position: fixed;
  display: flex;
  background: rgba(0,0,0,0.7);
  inset: 0;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: var(--transition);
 }
 .show-sidebar {
  z-index: 99;
  visibility: visible;
  opacity: 1;
 }
 .content {
  background: var(--background-secondary-color);
  width: var(--fluid-width);
  height: 95vh;
  border-radius: var(--border-radius);
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .close-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--red-dark);
 }
 .nav-links {
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
 }
 .nav-link {
  display: flex;
  align-items: center;
  color: var(--text-secondary-color);
  padding: 1rem 0;
  text-transform: capitalize;
  transition: var(--transition);
 }
 .nav-link:hover {
  color: var(--primary-500);
 }
 .icon {
  display: grid;
  margin-right: 1rem;
  font-size: 1.5rem;
  place-items: center;
 }
 .active {
  color: var(--primary-500);
 }
`;
export default Wrapper;
